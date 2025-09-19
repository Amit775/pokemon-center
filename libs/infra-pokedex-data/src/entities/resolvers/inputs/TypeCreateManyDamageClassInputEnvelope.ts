import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateManyDamageClassInput } from "../inputs/TypeCreateManyDamageClassInput";

@TypeGraphQL.InputType("TypeCreateManyDamageClassInputEnvelope", {})
export class TypeCreateManyDamageClassInputEnvelope {
  @TypeGraphQL.Field(_type => [TypeCreateManyDamageClassInput], {
    nullable: false
  })
  data!: TypeCreateManyDamageClassInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
