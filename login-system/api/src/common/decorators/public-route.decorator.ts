import { SetMetadata } from "@nestjs/common";
import { IS_PUBLIC_ROUTE_KEY } from "../constants";

/**
 * Custom decorator to mark a route as public
 *
 * Routes/Resolvers with this decorator will not require authentication
 */
export const PublicRoute = () => SetMetadata(IS_PUBLIC_ROUTE_KEY, true);
