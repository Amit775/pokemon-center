import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypesCreateManyTypeInputEnvelope } from "../inputs/PokemonFormTypesCreateManyTypeInputEnvelope";
import { PokemonFormTypesCreateOrConnectWithoutTypeInput } from "../inputs/PokemonFormTypesCreateOrConnectWithoutTypeInput";
import { PokemonFormTypesCreateWithoutTypeInput } from "../inputs/PokemonFormTypesCreateWithoutTypeInput";
import { PokemonFormTypesScalarWhereInput } from "../inputs/PokemonFormTypesScalarWhereInput";
import { PokemonFormTypesUpdateManyWithWhereWithoutTypeInput } from "../inputs/PokemonFormTypesUpdateManyWithWhereWithoutTypeInput";
import { PokemonFormTypesUpdateWithWhereUniqueWithoutTypeInput } from "../inputs/PokemonFormTypesUpdateWithWhereUniqueWithoutTypeInput";
import { PokemonFormTypesUpsertWithWhereUniqueWithoutTypeInput } from "../inputs/PokemonFormTypesUpsertWithWhereUniqueWithoutTypeInput";
import { PokemonFormTypesWhereUniqueInput } from "../inputs/PokemonFormTypesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormTypesUpdateManyWithoutTypeNestedInput", {})
export class PokemonFormTypesUpdateManyWithoutTypeNestedInput {
  @TypeGraphQL.Field(_type => [PokemonFormTypesCreateWithoutTypeInput], {
    nullable: true
  })
  create?: PokemonFormTypesCreateWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesCreateOrConnectWithoutTypeInput], {
    nullable: true
  })
  connectOrCreate?: PokemonFormTypesCreateOrConnectWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesUpsertWithWhereUniqueWithoutTypeInput], {
    nullable: true
  })
  upsert?: PokemonFormTypesUpsertWithWhereUniqueWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypesCreateManyTypeInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonFormTypesCreateManyTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonFormTypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonFormTypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonFormTypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonFormTypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesUpdateWithWhereUniqueWithoutTypeInput], {
    nullable: true
  })
  update?: PokemonFormTypesUpdateWithWhereUniqueWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesUpdateManyWithWhereWithoutTypeInput], {
    nullable: true
  })
  updateMany?: PokemonFormTypesUpdateManyWithWhereWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonFormTypesScalarWhereInput[] | undefined;
}
