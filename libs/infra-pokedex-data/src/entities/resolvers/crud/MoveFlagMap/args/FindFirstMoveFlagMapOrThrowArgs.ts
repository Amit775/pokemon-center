import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveFlagMapOrderByWithRelationInput } from "../../../inputs/MoveFlagMapOrderByWithRelationInput";
import { MoveFlagMapWhereInput } from "../../../inputs/MoveFlagMapWhereInput";
import { MoveFlagMapWhereUniqueInput } from "../../../inputs/MoveFlagMapWhereUniqueInput";
import { MoveFlagMapScalarFieldEnum } from "../../../../enums/MoveFlagMapScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMoveFlagMapOrThrowArgs {
  @TypeGraphQL.Field(_type => MoveFlagMapWhereInput, {
    nullable: true
  })
  where?: MoveFlagMapWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagMapOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MoveFlagMapOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveFlagMapWhereUniqueInput, {
    nullable: true
  })
  cursor?: MoveFlagMapWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagMapScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"move_id" | "move_flag_id"> | undefined;
}
