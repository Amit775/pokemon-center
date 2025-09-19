import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveBattleStyleUpdateManyMutationInput } from "../../../inputs/MoveBattleStyleUpdateManyMutationInput";
import { MoveBattleStyleWhereInput } from "../../../inputs/MoveBattleStyleWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMoveBattleStyleArgs {
  @TypeGraphQL.Field(_type => MoveBattleStyleUpdateManyMutationInput, {
    nullable: false
  })
  data!: MoveBattleStyleUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MoveBattleStyleWhereInput, {
    nullable: true
  })
  where?: MoveBattleStyleWhereInput | undefined;
}
