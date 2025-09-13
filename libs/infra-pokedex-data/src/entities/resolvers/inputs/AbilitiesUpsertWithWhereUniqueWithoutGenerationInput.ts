import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilitiesCreateWithoutGenerationInput } from "../inputs/AbilitiesCreateWithoutGenerationInput";
import { AbilitiesUpdateWithoutGenerationInput } from "../inputs/AbilitiesUpdateWithoutGenerationInput";
import { AbilitiesWhereUniqueInput } from "../inputs/AbilitiesWhereUniqueInput";

@TypeGraphQL.InputType("AbilitiesUpsertWithWhereUniqueWithoutGenerationInput", {})
export class AbilitiesUpsertWithWhereUniqueWithoutGenerationInput {
  @TypeGraphQL.Field(_type => AbilitiesWhereUniqueInput, {
    nullable: false
  })
  where!: AbilitiesWhereUniqueInput;

  @TypeGraphQL.Field(_type => AbilitiesUpdateWithoutGenerationInput, {
    nullable: false
  })
  update!: AbilitiesUpdateWithoutGenerationInput;

  @TypeGraphQL.Field(_type => AbilitiesCreateWithoutGenerationInput, {
    nullable: false
  })
  create!: AbilitiesCreateWithoutGenerationInput;
}
