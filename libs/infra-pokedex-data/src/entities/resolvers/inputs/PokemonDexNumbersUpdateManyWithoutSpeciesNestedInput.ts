import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonDexNumbersCreateManySpeciesInputEnvelope } from "../inputs/PokemonDexNumbersCreateManySpeciesInputEnvelope";
import { PokemonDexNumbersCreateOrConnectWithoutSpeciesInput } from "../inputs/PokemonDexNumbersCreateOrConnectWithoutSpeciesInput";
import { PokemonDexNumbersCreateWithoutSpeciesInput } from "../inputs/PokemonDexNumbersCreateWithoutSpeciesInput";
import { PokemonDexNumbersScalarWhereInput } from "../inputs/PokemonDexNumbersScalarWhereInput";
import { PokemonDexNumbersUpdateManyWithWhereWithoutSpeciesInput } from "../inputs/PokemonDexNumbersUpdateManyWithWhereWithoutSpeciesInput";
import { PokemonDexNumbersUpdateWithWhereUniqueWithoutSpeciesInput } from "../inputs/PokemonDexNumbersUpdateWithWhereUniqueWithoutSpeciesInput";
import { PokemonDexNumbersUpsertWithWhereUniqueWithoutSpeciesInput } from "../inputs/PokemonDexNumbersUpsertWithWhereUniqueWithoutSpeciesInput";
import { PokemonDexNumbersWhereUniqueInput } from "../inputs/PokemonDexNumbersWhereUniqueInput";

@TypeGraphQL.InputType("PokemonDexNumbersUpdateManyWithoutSpeciesNestedInput", {})
export class PokemonDexNumbersUpdateManyWithoutSpeciesNestedInput {
  @TypeGraphQL.Field(_type => [PokemonDexNumbersCreateWithoutSpeciesInput], {
    nullable: true
  })
  create?: PokemonDexNumbersCreateWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumbersCreateOrConnectWithoutSpeciesInput], {
    nullable: true
  })
  connectOrCreate?: PokemonDexNumbersCreateOrConnectWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumbersUpsertWithWhereUniqueWithoutSpeciesInput], {
    nullable: true
  })
  upsert?: PokemonDexNumbersUpsertWithWhereUniqueWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumbersCreateManySpeciesInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonDexNumbersCreateManySpeciesInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PokemonDexNumbersUpdateWithWhereUniqueWithoutSpeciesInput], {
    nullable: true
  })
  update?: PokemonDexNumbersUpdateWithWhereUniqueWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumbersUpdateManyWithWhereWithoutSpeciesInput], {
    nullable: true
  })
  updateMany?: PokemonDexNumbersUpdateManyWithWhereWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumbersScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonDexNumbersScalarWhereInput[] | undefined;
}
