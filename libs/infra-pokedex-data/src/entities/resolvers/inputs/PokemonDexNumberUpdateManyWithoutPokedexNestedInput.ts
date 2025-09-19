import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonDexNumberCreateManyPokedexInputEnvelope } from "../inputs/PokemonDexNumberCreateManyPokedexInputEnvelope";
import { PokemonDexNumberCreateOrConnectWithoutPokedexInput } from "../inputs/PokemonDexNumberCreateOrConnectWithoutPokedexInput";
import { PokemonDexNumberCreateWithoutPokedexInput } from "../inputs/PokemonDexNumberCreateWithoutPokedexInput";
import { PokemonDexNumberScalarWhereInput } from "../inputs/PokemonDexNumberScalarWhereInput";
import { PokemonDexNumberUpdateManyWithWhereWithoutPokedexInput } from "../inputs/PokemonDexNumberUpdateManyWithWhereWithoutPokedexInput";
import { PokemonDexNumberUpdateWithWhereUniqueWithoutPokedexInput } from "../inputs/PokemonDexNumberUpdateWithWhereUniqueWithoutPokedexInput";
import { PokemonDexNumberUpsertWithWhereUniqueWithoutPokedexInput } from "../inputs/PokemonDexNumberUpsertWithWhereUniqueWithoutPokedexInput";
import { PokemonDexNumberWhereUniqueInput } from "../inputs/PokemonDexNumberWhereUniqueInput";

@TypeGraphQL.InputType("PokemonDexNumberUpdateManyWithoutPokedexNestedInput", {})
export class PokemonDexNumberUpdateManyWithoutPokedexNestedInput {
  @TypeGraphQL.Field(_type => [PokemonDexNumberCreateWithoutPokedexInput], {
    nullable: true
  })
  create?: PokemonDexNumberCreateWithoutPokedexInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumberCreateOrConnectWithoutPokedexInput], {
    nullable: true
  })
  connectOrCreate?: PokemonDexNumberCreateOrConnectWithoutPokedexInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumberUpsertWithWhereUniqueWithoutPokedexInput], {
    nullable: true
  })
  upsert?: PokemonDexNumberUpsertWithWhereUniqueWithoutPokedexInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumberCreateManyPokedexInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonDexNumberCreateManyPokedexInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumberWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonDexNumberWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumberWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonDexNumberWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumberWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonDexNumberWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumberWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonDexNumberWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumberUpdateWithWhereUniqueWithoutPokedexInput], {
    nullable: true
  })
  update?: PokemonDexNumberUpdateWithWhereUniqueWithoutPokedexInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumberUpdateManyWithWhereWithoutPokedexInput], {
    nullable: true
  })
  updateMany?: PokemonDexNumberUpdateManyWithWhereWithoutPokedexInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumberScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonDexNumberScalarWhereInput[] | undefined;
}
