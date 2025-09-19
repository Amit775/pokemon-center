import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateManyGenerationInput } from "../inputs/TypeCreateManyGenerationInput";

@TypeGraphQL.InputType("TypeCreateManyGenerationInputEnvelope", {})
export class TypeCreateManyGenerationInputEnvelope {
  @TypeGraphQL.Field(_type => [TypeCreateManyGenerationInput], {
    nullable: false
  })
  data!: TypeCreateManyGenerationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
