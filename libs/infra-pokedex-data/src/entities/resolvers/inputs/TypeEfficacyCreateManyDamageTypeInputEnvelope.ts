import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeEfficacyCreateManyDamageTypeInput } from "../inputs/TypeEfficacyCreateManyDamageTypeInput";

@TypeGraphQL.InputType("TypeEfficacyCreateManyDamageTypeInputEnvelope", {})
export class TypeEfficacyCreateManyDamageTypeInputEnvelope {
  @TypeGraphQL.Field(_type => [TypeEfficacyCreateManyDamageTypeInput], {
    nullable: false
  })
  data!: TypeEfficacyCreateManyDamageTypeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
