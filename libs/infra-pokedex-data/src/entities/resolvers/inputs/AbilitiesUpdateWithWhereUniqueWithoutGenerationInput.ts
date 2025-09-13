import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilitiesUpdateWithoutGenerationInput } from "../inputs/AbilitiesUpdateWithoutGenerationInput";
import { AbilitiesWhereUniqueInput } from "../inputs/AbilitiesWhereUniqueInput";

@TypeGraphQL.InputType("AbilitiesUpdateWithWhereUniqueWithoutGenerationInput", {})
export class AbilitiesUpdateWithWhereUniqueWithoutGenerationInput {
  @TypeGraphQL.Field(_type => AbilitiesWhereUniqueInput, {
    nullable: false
  })
  where!: AbilitiesWhereUniqueInput;

  @TypeGraphQL.Field(_type => AbilitiesUpdateWithoutGenerationInput, {
    nullable: false
  })
  data!: AbilitiesUpdateWithoutGenerationInput;
}
