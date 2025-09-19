import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFirmnessCountBerriesArgs } from "./args/BerryFirmnessCountBerriesArgs";

@TypeGraphQL.ObjectType("BerryFirmnessCount", {})
export class BerryFirmnessCount {
  berries!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "berries",
    nullable: false
  })
  getBerries(@TypeGraphQL.Root() root: BerryFirmnessCount, @TypeGraphQL.Args() args: BerryFirmnessCountBerriesArgs): number {
    return root.berries;
  }
}
