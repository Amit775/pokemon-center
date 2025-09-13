import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilitiesCreateManyGenerationInputEnvelope } from "../inputs/AbilitiesCreateManyGenerationInputEnvelope";
import { AbilitiesCreateOrConnectWithoutGenerationInput } from "../inputs/AbilitiesCreateOrConnectWithoutGenerationInput";
import { AbilitiesCreateWithoutGenerationInput } from "../inputs/AbilitiesCreateWithoutGenerationInput";
import { AbilitiesWhereUniqueInput } from "../inputs/AbilitiesWhereUniqueInput";

@TypeGraphQL.InputType("AbilitiesCreateNestedManyWithoutGenerationInput", {})
export class AbilitiesCreateNestedManyWithoutGenerationInput {
  @TypeGraphQL.Field(_type => [AbilitiesCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: AbilitiesCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbilitiesCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: AbilitiesCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => AbilitiesCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: AbilitiesCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AbilitiesWhereUniqueInput], {
    nullable: true
  })
  connect?: AbilitiesWhereUniqueInput[] | undefined;
}
