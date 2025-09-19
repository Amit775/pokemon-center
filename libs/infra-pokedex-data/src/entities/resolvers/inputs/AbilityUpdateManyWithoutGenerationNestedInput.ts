import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilityCreateManyGenerationInputEnvelope } from "../inputs/AbilityCreateManyGenerationInputEnvelope";
import { AbilityCreateOrConnectWithoutGenerationInput } from "../inputs/AbilityCreateOrConnectWithoutGenerationInput";
import { AbilityCreateWithoutGenerationInput } from "../inputs/AbilityCreateWithoutGenerationInput";
import { AbilityScalarWhereInput } from "../inputs/AbilityScalarWhereInput";
import { AbilityUpdateManyWithWhereWithoutGenerationInput } from "../inputs/AbilityUpdateManyWithWhereWithoutGenerationInput";
import { AbilityUpdateWithWhereUniqueWithoutGenerationInput } from "../inputs/AbilityUpdateWithWhereUniqueWithoutGenerationInput";
import { AbilityUpsertWithWhereUniqueWithoutGenerationInput } from "../inputs/AbilityUpsertWithWhereUniqueWithoutGenerationInput";
import { AbilityWhereUniqueInput } from "../inputs/AbilityWhereUniqueInput";

@TypeGraphQL.InputType("AbilityUpdateManyWithoutGenerationNestedInput", {})
export class AbilityUpdateManyWithoutGenerationNestedInput {
  @TypeGraphQL.Field(_type => [AbilityCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: AbilityCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbilityCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: AbilityCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbilityUpsertWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  upsert?: AbilityUpsertWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => AbilityCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: AbilityCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AbilityWhereUniqueInput], {
    nullable: true
  })
  set?: AbilityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbilityWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AbilityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbilityWhereUniqueInput], {
    nullable: true
  })
  delete?: AbilityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbilityWhereUniqueInput], {
    nullable: true
  })
  connect?: AbilityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbilityUpdateWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  update?: AbilityUpdateWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbilityUpdateManyWithWhereWithoutGenerationInput], {
    nullable: true
  })
  updateMany?: AbilityUpdateManyWithWhereWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbilityScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AbilityScalarWhereInput[] | undefined;
}
