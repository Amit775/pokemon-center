import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationsOrderByWithRelationInput } from "../../../inputs/LocationsOrderByWithRelationInput";
import { LocationsWhereInput } from "../../../inputs/LocationsWhereInput";
import { LocationsWhereUniqueInput } from "../../../inputs/LocationsWhereUniqueInput";
import { LocationsScalarFieldEnum } from "../../../../enums/LocationsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstLocationsOrThrowArgs {
  @TypeGraphQL.Field(_type => LocationsWhereInput, {
    nullable: true
  })
  where?: LocationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LocationsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: LocationsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationsWhereUniqueInput, {
    nullable: true
  })
  cursor?: LocationsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [LocationsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "region_id" | "identifier"> | undefined;
}
