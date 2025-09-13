import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreasOrderByWithRelationInput } from "../../../inputs/LocationAreasOrderByWithRelationInput";
import { LocationAreasWhereInput } from "../../../inputs/LocationAreasWhereInput";
import { LocationAreasWhereUniqueInput } from "../../../inputs/LocationAreasWhereUniqueInput";
import { LocationAreasScalarFieldEnum } from "../../../../enums/LocationAreasScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstLocationAreasOrThrowArgs {
  @TypeGraphQL.Field(_type => LocationAreasWhereInput, {
    nullable: true
  })
  where?: LocationAreasWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LocationAreasOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: LocationAreasOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationAreasWhereUniqueInput, {
    nullable: true
  })
  cursor?: LocationAreasWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [LocationAreasScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "location_id" | "game_index" | "identifier"> | undefined;
}
