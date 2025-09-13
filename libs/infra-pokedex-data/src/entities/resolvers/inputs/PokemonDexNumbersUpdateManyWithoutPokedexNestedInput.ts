import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonDexNumbersCreateManyPokedexInputEnvelope } from "../inputs/PokemonDexNumbersCreateManyPokedexInputEnvelope";
import { PokemonDexNumbersCreateOrConnectWithoutPokedexInput } from "../inputs/PokemonDexNumbersCreateOrConnectWithoutPokedexInput";
import { PokemonDexNumbersCreateWithoutPokedexInput } from "../inputs/PokemonDexNumbersCreateWithoutPokedexInput";
import { PokemonDexNumbersScalarWhereInput } from "../inputs/PokemonDexNumbersScalarWhereInput";
import { PokemonDexNumbersUpdateManyWithWhereWithoutPokedexInput } from "../inputs/PokemonDexNumbersUpdateManyWithWhereWithoutPokedexInput";
import { PokemonDexNumbersUpdateWithWhereUniqueWithoutPokedexInput } from "../inputs/PokemonDexNumbersUpdateWithWhereUniqueWithoutPokedexInput";
import { PokemonDexNumbersUpsertWithWhereUniqueWithoutPokedexInput } from "../inputs/PokemonDexNumbersUpsertWithWhereUniqueWithoutPokedexInput";
import { PokemonDexNumbersWhereUniqueInput } from "../inputs/PokemonDexNumbersWhereUniqueInput";

@TypeGraphQL.InputType("PokemonDexNumbersUpdateManyWithoutPokedexNestedInput", {})
export class PokemonDexNumbersUpdateManyWithoutPokedexNestedInput {
  @TypeGraphQL.Field(_type => [PokemonDexNumbersCreateWithoutPokedexInput], {
    nullable: true
  })
  create?: PokemonDexNumbersCreateWithoutPokedexInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumbersCreateOrConnectWithoutPokedexInput], {
    nullable: true
  })
  connectOrCreate?: PokemonDexNumbersCreateOrConnectWithoutPokedexInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumbersUpsertWithWhereUniqueWithoutPokedexInput], {
    nullable: true
  })
  upsert?: PokemonDexNumbersUpsertWithWhereUniqueWithoutPokedexInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumbersCreateManyPokedexInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonDexNumbersCreateManyPokedexInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumbersWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonDexNumbersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumbersWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonDexNumbersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumbersWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonDexNumbersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumbersWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonDexNumbersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumbersUpdateWithWhereUniqueWithoutPokedexInput], {
    nullable: true
  })
  update?: PokemonDexNumbersUpdateWithWhereUniqueWithoutPokedexInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumbersUpdateManyWithWhereWithoutPokedexInput], {
    nullable: true
  })
  updateMany?: PokemonDexNumbersUpdateManyWithWhereWithoutPokedexInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumbersScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonDexNumbersScalarWhereInput[] | undefined;
}
