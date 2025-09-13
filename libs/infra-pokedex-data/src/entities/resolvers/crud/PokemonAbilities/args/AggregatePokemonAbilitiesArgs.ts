import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonAbilitiesOrderByWithRelationInput } from "../../../inputs/PokemonAbilitiesOrderByWithRelationInput";
import { PokemonAbilitiesWhereInput } from "../../../inputs/PokemonAbilitiesWhereInput";
import { PokemonAbilitiesWhereUniqueInput } from "../../../inputs/PokemonAbilitiesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePokemonAbilitiesArgs {
  @TypeGraphQL.Field(_type => PokemonAbilitiesWhereInput, {
    nullable: true
  })
  where?: PokemonAbilitiesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilitiesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonAbilitiesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilitiesWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonAbilitiesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
