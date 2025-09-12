import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveBattleStylesUpdateInput } from "../../../inputs/MoveBattleStylesUpdateInput";
import { MoveBattleStylesWhereUniqueInput } from "../../../inputs/MoveBattleStylesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMoveBattleStylesArgs {
  @TypeGraphQL.Field(_type => MoveBattleStylesUpdateInput, {
    nullable: false
  })
  data!: MoveBattleStylesUpdateInput;

  @TypeGraphQL.Field(_type => MoveBattleStylesWhereUniqueInput, {
    nullable: false
  })
  where!: MoveBattleStylesWhereUniqueInput;
}
