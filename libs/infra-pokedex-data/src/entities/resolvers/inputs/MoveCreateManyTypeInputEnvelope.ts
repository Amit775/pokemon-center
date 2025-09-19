import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateManyTypeInput } from "../inputs/MoveCreateManyTypeInput";

@TypeGraphQL.InputType("MoveCreateManyTypeInputEnvelope", {})
export class MoveCreateManyTypeInputEnvelope {
  @TypeGraphQL.Field(_type => [MoveCreateManyTypeInput], {
    nullable: false
  })
  data!: MoveCreateManyTypeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
