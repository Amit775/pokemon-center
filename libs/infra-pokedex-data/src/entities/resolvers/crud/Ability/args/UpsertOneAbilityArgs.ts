import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AbilityCreateInput } from "../../../inputs/AbilityCreateInput";
import { AbilityUpdateInput } from "../../../inputs/AbilityUpdateInput";
import { AbilityWhereUniqueInput } from "../../../inputs/AbilityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAbilityArgs {
  @TypeGraphQL.Field(_type => AbilityWhereUniqueInput, {
    nullable: false
  })
  where!: AbilityWhereUniqueInput;

  @TypeGraphQL.Field(_type => AbilityCreateInput, {
    nullable: false
  })
  create!: AbilityCreateInput;

  @TypeGraphQL.Field(_type => AbilityUpdateInput, {
    nullable: false
  })
  update!: AbilityUpdateInput;
}
