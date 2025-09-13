import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilitiesCreateManyGenerationInput } from "../inputs/AbilitiesCreateManyGenerationInput";

@TypeGraphQL.InputType("AbilitiesCreateManyGenerationInputEnvelope", {})
export class AbilitiesCreateManyGenerationInputEnvelope {
  @TypeGraphQL.Field(_type => [AbilitiesCreateManyGenerationInput], {
    nullable: false
  })
  data!: AbilitiesCreateManyGenerationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
