import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeGameIndexCreateManyTypeInput } from "../inputs/TypeGameIndexCreateManyTypeInput";

@TypeGraphQL.InputType("TypeGameIndexCreateManyTypeInputEnvelope", {})
export class TypeGameIndexCreateManyTypeInputEnvelope {
  @TypeGraphQL.Field(_type => [TypeGameIndexCreateManyTypeInput], {
    nullable: false
  })
  data!: TypeGameIndexCreateManyTypeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
