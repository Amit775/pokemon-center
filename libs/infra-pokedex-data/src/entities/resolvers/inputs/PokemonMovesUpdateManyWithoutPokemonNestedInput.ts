import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMovesCreateManyPokemonInputEnvelope } from "../inputs/PokemonMovesCreateManyPokemonInputEnvelope";
import { PokemonMovesCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonMovesCreateOrConnectWithoutPokemonInput";
import { PokemonMovesCreateWithoutPokemonInput } from "../inputs/PokemonMovesCreateWithoutPokemonInput";
import { PokemonMovesScalarWhereInput } from "../inputs/PokemonMovesScalarWhereInput";
import { PokemonMovesUpdateManyWithWhereWithoutPokemonInput } from "../inputs/PokemonMovesUpdateManyWithWhereWithoutPokemonInput";
import { PokemonMovesUpdateWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonMovesUpdateWithWhereUniqueWithoutPokemonInput";
import { PokemonMovesUpsertWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonMovesUpsertWithWhereUniqueWithoutPokemonInput";
import { PokemonMovesWhereUniqueInput } from "../inputs/PokemonMovesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMovesUpdateManyWithoutPokemonNestedInput", {})
export class PokemonMovesUpdateManyWithoutPokemonNestedInput {
  @TypeGraphQL.Field(_type => [PokemonMovesCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonMovesCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonMovesCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesUpsertWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  upsert?: PokemonMovesUpsertWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonMovesCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonMovesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonMovesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonMovesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonMovesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesUpdateWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  update?: PokemonMovesUpdateWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesUpdateManyWithWhereWithoutPokemonInput], {
    nullable: true
  })
  updateMany?: PokemonMovesUpdateManyWithWhereWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonMovesScalarWhereInput[] | undefined;
}
