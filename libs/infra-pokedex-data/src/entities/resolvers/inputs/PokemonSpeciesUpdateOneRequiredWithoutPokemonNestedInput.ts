import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonSpeciesCreateOrConnectWithoutPokemonInput";
import { PokemonSpeciesCreateWithoutPokemonInput } from "../inputs/PokemonSpeciesCreateWithoutPokemonInput";
import { PokemonSpeciesUpdateToOneWithWhereWithoutPokemonInput } from "../inputs/PokemonSpeciesUpdateToOneWithWhereWithoutPokemonInput";
import { PokemonSpeciesUpsertWithoutPokemonInput } from "../inputs/PokemonSpeciesUpsertWithoutPokemonInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesUpdateOneRequiredWithoutPokemonNestedInput", {})
export class PokemonSpeciesUpdateOneRequiredWithoutPokemonNestedInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutPokemonInput, {
    nullable: true
  })
  create?: PokemonSpeciesCreateWithoutPokemonInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateOrConnectWithoutPokemonInput, {
    nullable: true
  })
  connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutPokemonInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpsertWithoutPokemonInput, {
    nullable: true
  })
  upsert?: PokemonSpeciesUpsertWithoutPokemonInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonSpeciesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateToOneWithWhereWithoutPokemonInput, {
    nullable: true
  })
  update?: PokemonSpeciesUpdateToOneWithWhereWithoutPokemonInput | undefined;
}
