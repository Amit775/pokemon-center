import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilityCreateManyGenerationInputEnvelope } from "../inputs/AbilityCreateManyGenerationInputEnvelope";
import { AbilityCreateOrConnectWithoutGenerationInput } from "../inputs/AbilityCreateOrConnectWithoutGenerationInput";
import { AbilityCreateWithoutGenerationInput } from "../inputs/AbilityCreateWithoutGenerationInput";
import { AbilityWhereUniqueInput } from "../inputs/AbilityWhereUniqueInput";

@TypeGraphQL.InputType("AbilityCreateNestedManyWithoutGenerationInput", {})
export class AbilityCreateNestedManyWithoutGenerationInput {
  @TypeGraphQL.Field(_type => [AbilityCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: AbilityCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbilityCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: AbilityCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => AbilityCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: AbilityCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AbilityWhereUniqueInput], {
    nullable: true
  })
  connect?: AbilityWhereUniqueInput[] | undefined;
}
