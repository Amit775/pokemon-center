import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonEggGroupsOrderByWithRelationInput } from "../../../inputs/PokemonEggGroupsOrderByWithRelationInput";
import { PokemonEggGroupsWhereInput } from "../../../inputs/PokemonEggGroupsWhereInput";
import { PokemonEggGroupsWhereUniqueInput } from "../../../inputs/PokemonEggGroupsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePokemonEggGroupsArgs {
  @TypeGraphQL.Field(_type => PokemonEggGroupsWhereInput, {
    nullable: true
  })
  where?: PokemonEggGroupsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonEggGroupsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupsWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonEggGroupsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
