import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateManyGenerationInput } from "../inputs/MovesCreateManyGenerationInput";

@TypeGraphQL.InputType("MovesCreateManyGenerationInputEnvelope", {})
export class MovesCreateManyGenerationInputEnvelope {
  @TypeGraphQL.Field(_type => [MovesCreateManyGenerationInput], {
    nullable: false
  })
  data!: MovesCreateManyGenerationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
