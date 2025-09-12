import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateManyShapeInputEnvelope } from "../inputs/PokemonSpeciesCreateManyShapeInputEnvelope";
import { PokemonSpeciesCreateOrConnectWithoutShapeInput } from "../inputs/PokemonSpeciesCreateOrConnectWithoutShapeInput";
import { PokemonSpeciesCreateWithoutShapeInput } from "../inputs/PokemonSpeciesCreateWithoutShapeInput";
import { PokemonSpeciesScalarWhereInput } from "../inputs/PokemonSpeciesScalarWhereInput";
import { PokemonSpeciesUpdateManyWithWhereWithoutShapeInput } from "../inputs/PokemonSpeciesUpdateManyWithWhereWithoutShapeInput";
import { PokemonSpeciesUpdateWithWhereUniqueWithoutShapeInput } from "../inputs/PokemonSpeciesUpdateWithWhereUniqueWithoutShapeInput";
import { PokemonSpeciesUpsertWithWhereUniqueWithoutShapeInput } from "../inputs/PokemonSpeciesUpsertWithWhereUniqueWithoutShapeInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesUpdateManyWithoutShapeNestedInput", {})
export class PokemonSpeciesUpdateManyWithoutShapeNestedInput {
  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateWithoutShapeInput], {
    nullable: true
  })
  create?: PokemonSpeciesCreateWithoutShapeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateOrConnectWithoutShapeInput], {
    nullable: true
  })
  connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutShapeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesUpsertWithWhereUniqueWithoutShapeInput], {
    nullable: true
  })
  upsert?: PokemonSpeciesUpsertWithWhereUniqueWithoutShapeInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateManyShapeInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonSpeciesCreateManyShapeInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PokemonSpeciesUpdateWithWhereUniqueWithoutShapeInput], {
    nullable: true
  })
  update?: PokemonSpeciesUpdateWithWhereUniqueWithoutShapeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesUpdateManyWithWhereWithoutShapeInput], {
    nullable: true
  })
  updateMany?: PokemonSpeciesUpdateManyWithWhereWithoutShapeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonSpeciesScalarWhereInput[] | undefined;
}
