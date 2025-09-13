import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateManyColorInputEnvelope } from "../inputs/PokemonSpeciesCreateManyColorInputEnvelope";
import { PokemonSpeciesCreateOrConnectWithoutColorInput } from "../inputs/PokemonSpeciesCreateOrConnectWithoutColorInput";
import { PokemonSpeciesCreateWithoutColorInput } from "../inputs/PokemonSpeciesCreateWithoutColorInput";
import { PokemonSpeciesScalarWhereInput } from "../inputs/PokemonSpeciesScalarWhereInput";
import { PokemonSpeciesUpdateManyWithWhereWithoutColorInput } from "../inputs/PokemonSpeciesUpdateManyWithWhereWithoutColorInput";
import { PokemonSpeciesUpdateWithWhereUniqueWithoutColorInput } from "../inputs/PokemonSpeciesUpdateWithWhereUniqueWithoutColorInput";
import { PokemonSpeciesUpsertWithWhereUniqueWithoutColorInput } from "../inputs/PokemonSpeciesUpsertWithWhereUniqueWithoutColorInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesUpdateManyWithoutColorNestedInput", {})
export class PokemonSpeciesUpdateManyWithoutColorNestedInput {
  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateWithoutColorInput], {
    nullable: true
  })
  create?: PokemonSpeciesCreateWithoutColorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateOrConnectWithoutColorInput], {
    nullable: true
  })
  connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutColorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesUpsertWithWhereUniqueWithoutColorInput], {
    nullable: true
  })
  upsert?: PokemonSpeciesUpsertWithWhereUniqueWithoutColorInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateManyColorInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonSpeciesCreateManyColorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonSpeciesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonSpeciesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonSpeciesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonSpeciesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesUpdateWithWhereUniqueWithoutColorInput], {
    nullable: true
  })
  update?: PokemonSpeciesUpdateWithWhereUniqueWithoutColorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesUpdateManyWithWhereWithoutColorInput], {
    nullable: true
  })
  updateMany?: PokemonSpeciesUpdateManyWithWhereWithoutColorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonSpeciesScalarWhereInput[] | undefined;
}
