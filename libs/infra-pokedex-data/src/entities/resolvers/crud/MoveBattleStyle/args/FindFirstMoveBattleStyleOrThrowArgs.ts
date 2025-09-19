import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveBattleStyleOrderByWithRelationInput } from "../../../inputs/MoveBattleStyleOrderByWithRelationInput";
import { MoveBattleStyleWhereInput } from "../../../inputs/MoveBattleStyleWhereInput";
import { MoveBattleStyleWhereUniqueInput } from "../../../inputs/MoveBattleStyleWhereUniqueInput";
import { MoveBattleStyleScalarFieldEnum } from "../../../../enums/MoveBattleStyleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMoveBattleStyleOrThrowArgs {
  @TypeGraphQL.Field(_type => MoveBattleStyleWhereInput, {
    nullable: true
  })
  where?: MoveBattleStyleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveBattleStyleOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MoveBattleStyleOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStyleWhereUniqueInput, {
    nullable: true
  })
  cursor?: MoveBattleStyleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MoveBattleStyleScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier"> | undefined;
}
