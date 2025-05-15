import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Spinner from "../components/Spinner";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {

        const { user, isLoading } = useContext(AuthContext);
        
        if (isLoading) {
            return <div className="flex justify-center items-center h-screen">
                <Spinner />
            </div>
        } 
        
        if (!user) {
            return <Navigate to="/logOrRegister" replace />;
        }
        return children;
}

export default ProtectedRoute;