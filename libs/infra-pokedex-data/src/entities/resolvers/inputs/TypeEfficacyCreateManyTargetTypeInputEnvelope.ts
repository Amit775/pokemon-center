import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeEfficacyCreateManyTargetTypeInput } from "../inputs/TypeEfficacyCreateManyTargetTypeInput";

@TypeGraphQL.InputType("TypeEfficacyCreateManyTargetTypeInputEnvelope", {})
export class TypeEfficacyCreateManyTargetTypeInputEnvelope {
  @TypeGraphQL.Field(_type => [TypeEfficacyCreateManyTargetTypeInput], {
    nullable: false
  })
  data!: TypeEfficacyCreateManyTargetTypeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
