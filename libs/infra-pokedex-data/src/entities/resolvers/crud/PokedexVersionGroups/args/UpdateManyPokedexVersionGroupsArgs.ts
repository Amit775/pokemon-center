import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexVersionGroupsUpdateManyMutationInput } from "../../../inputs/PokedexVersionGroupsUpdateManyMutationInput";
import { PokedexVersionGroupsWhereInput } from "../../../inputs/PokedexVersionGroupsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokedexVersionGroupsArgs {
  @TypeGraphQL.Field(_type => PokedexVersionGroupsUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokedexVersionGroupsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsWhereInput, {
    nullable: true
  })
  where?: PokedexVersionGroupsWhereInput | undefined;
}
