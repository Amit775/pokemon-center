import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateManyTargetInput } from "../inputs/MoveCreateManyTargetInput";

@TypeGraphQL.InputType("MoveCreateManyTargetInputEnvelope", {})
export class MoveCreateManyTargetInputEnvelope {
  @TypeGraphQL.Field(_type => [MoveCreateManyTargetInput], {
    nullable: false
  })
  data!: MoveCreateManyTargetInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
