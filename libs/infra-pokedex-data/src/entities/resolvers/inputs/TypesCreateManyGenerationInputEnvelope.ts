import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateManyGenerationInput } from "../inputs/TypesCreateManyGenerationInput";

@TypeGraphQL.InputType("TypesCreateManyGenerationInputEnvelope", {})
export class TypesCreateManyGenerationInputEnvelope {
  @TypeGraphQL.Field(_type => [TypesCreateManyGenerationInput], {
    nullable: false
  })
  data!: TypesCreateManyGenerationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
