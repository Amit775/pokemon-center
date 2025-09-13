import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeGameIndicesCreateManyTypeInput } from "../inputs/TypeGameIndicesCreateManyTypeInput";

@TypeGraphQL.InputType("TypeGameIndicesCreateManyTypeInputEnvelope", {})
export class TypeGameIndicesCreateManyTypeInputEnvelope {
  @TypeGraphQL.Field(_type => [TypeGameIndicesCreateManyTypeInput], {
    nullable: false
  })
  data!: TypeGameIndicesCreateManyTypeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
