import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AbilitiesUpdateInput } from "../../../inputs/AbilitiesUpdateInput";
import { AbilitiesWhereUniqueInput } from "../../../inputs/AbilitiesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneAbilitiesArgs {
  @TypeGraphQL.Field(_type => AbilitiesUpdateInput, {
    nullable: false
  })
  data!: AbilitiesUpdateInput;

  @TypeGraphQL.Field(_type => AbilitiesWhereUniqueInput, {
    nullable: false
  })
  where!: AbilitiesWhereUniqueInput;
}
