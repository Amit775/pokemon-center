import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonTypesCreateManyTypeInputEnvelope } from "../inputs/PokemonTypesCreateManyTypeInputEnvelope";
import { PokemonTypesCreateOrConnectWithoutTypeInput } from "../inputs/PokemonTypesCreateOrConnectWithoutTypeInput";
import { PokemonTypesCreateWithoutTypeInput } from "../inputs/PokemonTypesCreateWithoutTypeInput";
import { PokemonTypesScalarWhereInput } from "../inputs/PokemonTypesScalarWhereInput";
import { PokemonTypesUpdateManyWithWhereWithoutTypeInput } from "../inputs/PokemonTypesUpdateManyWithWhereWithoutTypeInput";
import { PokemonTypesUpdateWithWhereUniqueWithoutTypeInput } from "../inputs/PokemonTypesUpdateWithWhereUniqueWithoutTypeInput";
import { PokemonTypesUpsertWithWhereUniqueWithoutTypeInput } from "../inputs/PokemonTypesUpsertWithWhereUniqueWithoutTypeInput";
import { PokemonTypesWhereUniqueInput } from "../inputs/PokemonTypesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonTypesUpdateManyWithoutTypeNestedInput", {})
export class PokemonTypesUpdateManyWithoutTypeNestedInput {
  @TypeGraphQL.Field(_type => [PokemonTypesCreateWithoutTypeInput], {
    nullable: true
  })
  create?: PokemonTypesCreateWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesCreateOrConnectWithoutTypeInput], {
    nullable: true
  })
  connectOrCreate?: PokemonTypesCreateOrConnectWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesUpsertWithWhereUniqueWithoutTypeInput], {
    nullable: true
  })
  upsert?: PokemonTypesUpsertWithWhereUniqueWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonTypesCreateManyTypeInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonTypesCreateManyTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonTypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonTypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonTypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonTypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesUpdateWithWhereUniqueWithoutTypeInput], {
    nullable: true
  })
  update?: PokemonTypesUpdateWithWhereUniqueWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesUpdateManyWithWhereWithoutTypeInput], {
    nullable: true
  })
  updateMany?: PokemonTypesUpdateManyWithWhereWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonTypesScalarWhereInput[] | undefined;
}
