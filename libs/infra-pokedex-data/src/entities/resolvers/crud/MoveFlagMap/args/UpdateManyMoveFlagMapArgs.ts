import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveFlagMapUpdateManyMutationInput } from "../../../inputs/MoveFlagMapUpdateManyMutationInput";
import { MoveFlagMapWhereInput } from "../../../inputs/MoveFlagMapWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMoveFlagMapArgs {
  @TypeGraphQL.Field(_type => MoveFlagMapUpdateManyMutationInput, {
    nullable: false
  })
  data!: MoveFlagMapUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MoveFlagMapWhereInput, {
    nullable: true
  })
  where?: MoveFlagMapWhereInput | undefined;
}
