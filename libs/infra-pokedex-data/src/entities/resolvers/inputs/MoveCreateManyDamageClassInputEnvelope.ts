import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateManyDamageClassInput } from "../inputs/MoveCreateManyDamageClassInput";

@TypeGraphQL.InputType("MoveCreateManyDamageClassInputEnvelope", {})
export class MoveCreateManyDamageClassInputEnvelope {
  @TypeGraphQL.Field(_type => [MoveCreateManyDamageClassInput], {
    nullable: false
  })
  data!: MoveCreateManyDamageClassInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
