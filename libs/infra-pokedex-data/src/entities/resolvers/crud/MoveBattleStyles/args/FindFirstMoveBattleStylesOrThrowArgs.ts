import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveBattleStylesOrderByWithRelationInput } from "../../../inputs/MoveBattleStylesOrderByWithRelationInput";
import { MoveBattleStylesWhereInput } from "../../../inputs/MoveBattleStylesWhereInput";
import { MoveBattleStylesWhereUniqueInput } from "../../../inputs/MoveBattleStylesWhereUniqueInput";
import { MoveBattleStylesScalarFieldEnum } from "../../../../enums/MoveBattleStylesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMoveBattleStylesOrThrowArgs {
  @TypeGraphQL.Field(_type => MoveBattleStylesWhereInput, {
    nullable: true
  })
  where?: MoveBattleStylesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveBattleStylesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MoveBattleStylesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStylesWhereUniqueInput, {
    nullable: true
  })
  cursor?: MoveBattleStylesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MoveBattleStylesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier"> | undefined;
}
