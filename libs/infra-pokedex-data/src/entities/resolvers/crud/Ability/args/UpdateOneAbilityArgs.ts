import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AbilityUpdateInput } from "../../../inputs/AbilityUpdateInput";
import { AbilityWhereUniqueInput } from "../../../inputs/AbilityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneAbilityArgs {
  @TypeGraphQL.Field(_type => AbilityUpdateInput, {
    nullable: false
  })
  data!: AbilityUpdateInput;

  @TypeGraphQL.Field(_type => AbilityWhereUniqueInput, {
    nullable: false
  })
  where!: AbilityWhereUniqueInput;
}
