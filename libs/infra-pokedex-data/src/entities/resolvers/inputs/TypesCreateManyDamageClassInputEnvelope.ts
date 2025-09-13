import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateManyDamageClassInput } from "../inputs/TypesCreateManyDamageClassInput";

@TypeGraphQL.InputType("TypesCreateManyDamageClassInputEnvelope", {})
export class TypesCreateManyDamageClassInputEnvelope {
  @TypeGraphQL.Field(_type => [TypesCreateManyDamageClassInput], {
    nullable: false
  })
  data!: TypesCreateManyDamageClassInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
