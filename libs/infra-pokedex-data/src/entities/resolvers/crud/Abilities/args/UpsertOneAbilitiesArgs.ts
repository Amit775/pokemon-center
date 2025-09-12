import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AbilitiesCreateInput } from "../../../inputs/AbilitiesCreateInput";
import { AbilitiesUpdateInput } from "../../../inputs/AbilitiesUpdateInput";
import { AbilitiesWhereUniqueInput } from "../../../inputs/AbilitiesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAbilitiesArgs {
  @TypeGraphQL.Field(_type => AbilitiesWhereUniqueInput, {
    nullable: false
  })
  where!: AbilitiesWhereUniqueInput;

  @TypeGraphQL.Field(_type => AbilitiesCreateInput, {
    nullable: false
  })
  create!: AbilitiesCreateInput;

  @TypeGraphQL.Field(_type => AbilitiesUpdateInput, {
    nullable: false
  })
  update!: AbilitiesUpdateInput;
}
