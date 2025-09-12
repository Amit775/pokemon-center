import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AbilitiesUpdateManyMutationInput } from "../../../inputs/AbilitiesUpdateManyMutationInput";
import { AbilitiesWhereInput } from "../../../inputs/AbilitiesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAbilitiesArgs {
  @TypeGraphQL.Field(_type => AbilitiesUpdateManyMutationInput, {
    nullable: false
  })
  data!: AbilitiesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AbilitiesWhereInput, {
    nullable: true
  })
  where?: AbilitiesWhereInput | undefined;
}
