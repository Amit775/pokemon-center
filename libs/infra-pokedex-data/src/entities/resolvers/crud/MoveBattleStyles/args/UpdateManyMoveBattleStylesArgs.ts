import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveBattleStylesUpdateManyMutationInput } from "../../../inputs/MoveBattleStylesUpdateManyMutationInput";
import { MoveBattleStylesWhereInput } from "../../../inputs/MoveBattleStylesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMoveBattleStylesArgs {
  @TypeGraphQL.Field(_type => MoveBattleStylesUpdateManyMutationInput, {
    nullable: false
  })
  data!: MoveBattleStylesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MoveBattleStylesWhereInput, {
    nullable: true
  })
  where?: MoveBattleStylesWhereInput | undefined;
}
