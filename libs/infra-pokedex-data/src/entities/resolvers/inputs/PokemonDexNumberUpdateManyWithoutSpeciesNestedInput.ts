import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonDexNumberCreateManySpeciesInputEnvelope } from "../inputs/PokemonDexNumberCreateManySpeciesInputEnvelope";
import { PokemonDexNumberCreateOrConnectWithoutSpeciesInput } from "../inputs/PokemonDexNumberCreateOrConnectWithoutSpeciesInput";
import { PokemonDexNumberCreateWithoutSpeciesInput } from "../inputs/PokemonDexNumberCreateWithoutSpeciesInput";
import { PokemonDexNumberScalarWhereInput } from "../inputs/PokemonDexNumberScalarWhereInput";
import { PokemonDexNumberUpdateManyWithWhereWithoutSpeciesInput } from "../inputs/PokemonDexNumberUpdateManyWithWhereWithoutSpeciesInput";
import { PokemonDexNumberUpdateWithWhereUniqueWithoutSpeciesInput } from "../inputs/PokemonDexNumberUpdateWithWhereUniqueWithoutSpeciesInput";
import { PokemonDexNumberUpsertWithWhereUniqueWithoutSpeciesInput } from "../inputs/PokemonDexNumberUpsertWithWhereUniqueWithoutSpeciesInput";
import { PokemonDexNumberWhereUniqueInput } from "../inputs/PokemonDexNumberWhereUniqueInput";

@TypeGraphQL.InputType("PokemonDexNumberUpdateManyWithoutSpeciesNestedInput", {})
export class PokemonDexNumberUpdateManyWithoutSpeciesNestedInput {
  @TypeGraphQL.Field(_type => [PokemonDexNumberCreateWithoutSpeciesInput], {
    nullable: true
  })
  create?: PokemonDexNumberCreateWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumberCreateOrConnectWithoutSpeciesInput], {
    nullable: true
  })
  connectOrCreate?: PokemonDexNumberCreateOrConnectWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumberUpsertWithWhereUniqueWithoutSpeciesInput], {
    nullable: true
  })
  upsert?: PokemonDexNumberUpsertWithWhereUniqueWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumberCreateManySpeciesInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonDexNumberCreateManySpeciesInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PokemonDexNumberUpdateWithWhereUniqueWithoutSpeciesInput], {
    nullable: true
  })
  update?: PokemonDexNumberUpdateWithWhereUniqueWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumberUpdateManyWithWhereWithoutSpeciesInput], {
    nullable: true
  })
  updateMany?: PokemonDexNumberUpdateManyWithWhereWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumberScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonDexNumberScalarWhereInput[] | undefined;
}
