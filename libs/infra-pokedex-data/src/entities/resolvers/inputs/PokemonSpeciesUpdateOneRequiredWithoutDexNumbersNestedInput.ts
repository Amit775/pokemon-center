import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateOrConnectWithoutDexNumbersInput } from "../inputs/PokemonSpeciesCreateOrConnectWithoutDexNumbersInput";
import { PokemonSpeciesCreateWithoutDexNumbersInput } from "../inputs/PokemonSpeciesCreateWithoutDexNumbersInput";
import { PokemonSpeciesUpdateToOneWithWhereWithoutDexNumbersInput } from "../inputs/PokemonSpeciesUpdateToOneWithWhereWithoutDexNumbersInput";
import { PokemonSpeciesUpsertWithoutDexNumbersInput } from "../inputs/PokemonSpeciesUpsertWithoutDexNumbersInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesUpdateOneRequiredWithoutDexNumbersNestedInput", {})
export class PokemonSpeciesUpdateOneRequiredWithoutDexNumbersNestedInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutDexNumbersInput, {
    nullable: true
  })
  create?: PokemonSpeciesCreateWithoutDexNumbersInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateOrConnectWithoutDexNumbersInput, {
    nullable: true
  })
  connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutDexNumbersInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpsertWithoutDexNumbersInput, {
    nullable: true
  })
  upsert?: PokemonSpeciesUpsertWithoutDexNumbersInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonSpeciesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateToOneWithWhereWithoutDexNumbersInput, {
    nullable: true
  })
  update?: PokemonSpeciesUpdateToOneWithWhereWithoutDexNumbersInput | undefined;
}
