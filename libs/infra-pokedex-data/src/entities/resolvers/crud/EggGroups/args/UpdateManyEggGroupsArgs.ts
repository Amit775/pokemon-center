import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EggGroupsUpdateManyMutationInput } from "../../../inputs/EggGroupsUpdateManyMutationInput";
import { EggGroupsWhereInput } from "../../../inputs/EggGroupsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEggGroupsArgs {
  @TypeGraphQL.Field(_type => EggGroupsUpdateManyMutationInput, {
    nullable: false
  })
  data!: EggGroupsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EggGroupsWhereInput, {
    nullable: true
  })
  where?: EggGroupsWhereInput | undefined;
}
