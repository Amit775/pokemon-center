import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MachinesCreateManyInput } from "../../../inputs/MachinesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMachinesArgs {
  @TypeGraphQL.Field(_type => [MachinesCreateManyInput], {
    nullable: false
  })
  data!: MachinesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
