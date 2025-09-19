import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationGameIndexOrderByWithRelationInput } from "../../../inputs/LocationGameIndexOrderByWithRelationInput";
import { LocationGameIndexWhereInput } from "../../../inputs/LocationGameIndexWhereInput";
import { LocationGameIndexWhereUniqueInput } from "../../../inputs/LocationGameIndexWhereUniqueInput";
import { LocationGameIndexScalarFieldEnum } from "../../../../enums/LocationGameIndexScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstLocationGameIndexOrThrowArgs {
  @TypeGraphQL.Field(_type => LocationGameIndexWhereInput, {
    nullable: true
  })
  where?: LocationGameIndexWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndexOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: LocationGameIndexOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndexWhereUniqueInput, {
    nullable: true
  })
  cursor?: LocationGameIndexWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndexScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"location_id" | "generation_id" | "game_index"> | undefined;
}
