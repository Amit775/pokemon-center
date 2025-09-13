import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonGameIndicesCreateManyPokemonInputEnvelope } from "../inputs/PokemonGameIndicesCreateManyPokemonInputEnvelope";
import { PokemonGameIndicesCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonGameIndicesCreateOrConnectWithoutPokemonInput";
import { PokemonGameIndicesCreateWithoutPokemonInput } from "../inputs/PokemonGameIndicesCreateWithoutPokemonInput";
import { PokemonGameIndicesScalarWhereInput } from "../inputs/PokemonGameIndicesScalarWhereInput";
import { PokemonGameIndicesUpdateManyWithWhereWithoutPokemonInput } from "../inputs/PokemonGameIndicesUpdateManyWithWhereWithoutPokemonInput";
import { PokemonGameIndicesUpdateWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonGameIndicesUpdateWithWhereUniqueWithoutPokemonInput";
import { PokemonGameIndicesUpsertWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonGameIndicesUpsertWithWhereUniqueWithoutPokemonInput";
import { PokemonGameIndicesWhereUniqueInput } from "../inputs/PokemonGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonGameIndicesUpdateManyWithoutPokemonNestedInput", {})
export class PokemonGameIndicesUpdateManyWithoutPokemonNestedInput {
  @TypeGraphQL.Field(_type => [PokemonGameIndicesCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonGameIndicesCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonGameIndicesCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesUpsertWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  upsert?: PokemonGameIndicesUpsertWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndicesCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonGameIndicesCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonGameIndicesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonGameIndicesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonGameIndicesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonGameIndicesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesUpdateWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  update?: PokemonGameIndicesUpdateWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesUpdateManyWithWhereWithoutPokemonInput], {
    nullable: true
  })
  updateMany?: PokemonGameIndicesUpdateManyWithWhereWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonGameIndicesScalarWhereInput[] | undefined;
}
